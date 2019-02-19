import React, { Component } from 'react';

import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
import auth from '../../dateJSON';
import './style.css';

class Table extends Component {
  state = {
    editingTd: null,
    rowsSelect: [],
    rows: auth,
  };

  onClickCell = (event) => {
    const { target } = event;
    const { state } = this;
    if (target.className.trim() === 'edit-cancel') {
      this.finishTdEdit(state.editingTd.elem, false);
    }
    if (target.className.trim() === 'edit-ok') {
      this.finishTdEdit(state.editingTd.elem, true);
    }
    if (target.parentNode.classList.contains('sticky-table-row')) {
      if (event.ctrlKey) {
        this.selectRow(target.parentNode);
      }
    }
  };

  editCell = (event) => {
    const { target } = event;
    const { state } = this;
    if (target.classList.contains('sticky-table-cell')) {
      if (state.editingTd) return;
      this.makeTdEditable(target);
    }
  }

  selectRow = (el) => {
    const { state } = this;
    if (!el.classList.contains('row-active')) {
      this.setState({
        rowsSelect: [...state.rowsSelect, el],
      });
      el.classList.add('row-active');
    } else {
      el.classList.remove('row-active');
      const rowsSelect = [...state.rowsSelect];
      const index = rowsSelect.indexOf(el);
      if (index !== -1) {
        rowsSelect.splice(index, 1);
        this.setState({ rowsSelect });
      }
    }
  };

  showList = () => {
    const { state } = this;
    return state.rows.map(user => (
      <Row key={user.id}>
        <Cell>{user.id}</Cell>
        <Cell>{user.username}</Cell>
        <Cell>{user.password}</Cell>
        <Cell>{user.firstName}</Cell>
        <Cell>{user.lastName}</Cell>
        <Cell><img src={user.avatar} height="50" alt={user.username} /></Cell>
        <Cell>{user.avatar}</Cell>
      </Row>
    ));
  };

  showState = () => {
    const { state } = this;
    return (
      <div className="stateTable">
        <strong>State:</strong>
        {' '}
        {state.rows.length}
        /
        {state.rowsSelect.length}
      </div>
    );
  };

  makeTdEditable = (TD) => {
    const td = TD;
    this.setState({
      editingTd: {
        elem: td,
        data: td.innerHTML,
      },
    });

    td.classList.add('edit-td');

    const textArea = document.createElement('textarea');
    textArea.style.width = `${td.clientWidth}px`;
    textArea.style.height = `${td.clientHeight}px`;
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML('beforeEnd',
      '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>');
  };

  finishTdEdit = (TD, isOk) => {
    const { state } = this;
    const td = TD;
    if (isOk) {
      td.innerHTML = td.firstChild.value;
    } else {
      td.innerHTML = state.editingTd.data;
    }
    td.classList.remove('edit-td');
    this.state.editingTd = null;
  };

  render() {
    const { props } = this;
    if (props.authActive === false) {
      return (<Redirect to="/login" />);
    }
    return (
      <section className="full-section">
        <h1>Таблицы</h1>
        <ol>
          <li>Ждя редактирования таблицы, кликните дважды по нужной вам ечейке</li>
          <li>Для выделения в таблице, используйте сочитание клавиш CTRL + Левая клавиша мыши</li>
          <li>Число записей в таблице и число выделенных строк, можно посмотреть в строке состояния</li>
          <li>Сайт адаптивный, потому скролл на таблице появится при уменьшении окна</li>
        </ol>
        <h2>Содержимое таблицы</h2>
        <p>В качестве содержимого таблицы, были выбраны данные пользователей, которые используются для авторизации.</p>
        <div role="grid" tabIndex={0} onClick={this.onClickCell} onKeyDown={this.onClickCell} onDoubleClick={this.editCell} style={{ width: '100%', height: '400px' }}>
          <StickyTable>
            <Row>
              <Cell>ID</Cell>
              <Cell>Username</Cell>
              <Cell>Password</Cell>
              <Cell>First Name</Cell>
              <Cell>Last Name</Cell>
              <Cell>Avatar IMG</Cell>
              <Cell>Avatar SRC</Cell>
            </Row>
            { this.showList() }
          </StickyTable>
        </div>
        { this.showState() }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  authActive: state.authInfo.authActive,
  authUser: state.authInfo.authUser,
});

export default connect(mapStateToProps)(Table);
