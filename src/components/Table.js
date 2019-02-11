import React, { Component } from 'react';

import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';

export default class Table extends Component {
  state = {
    editingTd: null
  }

  render() {
    return (
      <section>
        <div onClick={this.onClickCell} onDoubleClick={this.editCell} style={{width: '100%', height: '400px'}}>
          <StickyTable>
            <Row>
              <Cell></Cell>
              <Cell>Header 1</Cell>
              <Cell>Header 2</Cell>
              <Cell>Header 3</Cell>
              <Cell>Header 4</Cell>
              <Cell>Header 5</Cell>
              <Cell>Header 6</Cell>
              <Cell>Header 7</Cell>
            </Row>
            <Row>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
            </Row>
            <Row>
              <Cell>Cell 2</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
            </Row>
            <Row>
              <Cell>Cell 3</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
            </Row>
            <Row>
              <Cell>Cell 4</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
            </Row>
            <Row>
              <Cell>Cell 5</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
            </Row>
            <Row>
              <Cell>Cell 6</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
              <Cell>Cell 1</Cell>
              <Cell>Cell 2</Cell>
            </Row>
          </StickyTable>
        </div>
      </section>
    )
  }

  onClickCell = (event) => {
    let target = event.target;
    if (target.className.trim() == 'edit-cancel') {
      this.finishTdEdit(this.state.editingTd.elem, false);
      return;
    }
    if (target.className.trim() == 'edit-ok') {
      this.finishTdEdit(this.state.editingTd.elem, true);
      return;
    }
    if (target.parentNode.classList.contains('sticky-table-row')) {
      if (event.ctrlKey) {
        if (!target.parentNode.classList.contains('row-active')) {
          target.parentNode.classList.add('row-active');
          return;
        } else {
          target.parentNode.classList.remove('row-active');
          return;
        }
      }
    }
    return;
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
