import React, { Component } from 'react';

import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
import { auth } from '../dateJSON';

export default class Table extends Component {
  state = {
    editingTd: null,
    rowsSelect: [],
    rows: auth
  }

  render() {
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
        <div onClick={this.onClickCell} onDoubleClick={this.editCell} style={{width: '100%', height: '400px'}}>
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
    )
  }

  showState() {
    const { state } = this;
    return (
      <div className="stateTable">
        <strong>State:</strong> {this.state.rows.length}/{this.state.rowsSelect.length}
      </div>
    );
  }

  showList() {
    const { state } = this;
    return state.rows.map(auth => (
      <Row key={auth.id}>
        <Cell>{auth.id}</Cell>
        <Cell>{auth.username}</Cell>
        <Cell>{auth.password}</Cell>
        <Cell>{auth.firstName}</Cell>
        <Cell>{auth.lastName}</Cell>
        <Cell><img src={auth.avatar} height="50" alt={auth.username}/></Cell>
        <Cell>{auth.avatar}</Cell>
      </Row>
    ));
  }

  selectRow(el) {
    if (!el.classList.contains('row-active')) {
      this.setState({
        rowsSelect: [...this.state.rowsSelect, el]
      })
      el.classList.add('row-active');
    } else {
      el.classList.remove('row-active');
      let rowsSelect = [...this.state.rowsSelect],
        index = rowsSelect.indexOf(el);
      if (index !== -1) {
        rowsSelect.splice(index, 1);
        this.setState({rowsSelect: rowsSelect});
      }
    }
  }

  onClickCell = (event) => {
    let target = event.target;
    if (target.className.trim() == 'edit-cancel') {
      this.finishTdEdit(this.state.editingTd.elem, false);
    }
    if (target.className.trim() == 'edit-ok') {
      this.finishTdEdit(this.state.editingTd.elem, true);
    }
    if (target.parentNode.classList.contains('sticky-table-row')) {
      if (event.ctrlKey) {
        this.selectRow(target.parentNode)
      }
    }
  }

  editCell = (event) => {
    let target = event.target;
    if (target.classList.contains('sticky-table-cell')) {
      if (this.state.editingTd) return;
      this.makeTdEditable(target);
      target = target.parentNode;
    }
  }

  makeTdEditable(td) {
    this.setState({
			editingTd: {
        elem: td,
        data: td.innerHTML
      }
		})

    td.classList.add('edit-td');

    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd",
      '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
    );
  }

  finishTdEdit(td, isOk) {
    if (isOk) {
      td.innerHTML = td.firstChild.value;
    } else {
      td.innerHTML = this.state.editingTd.data;
    }
    td.classList.remove('edit-td');
    this.state.editingTd = null;
  }
}
