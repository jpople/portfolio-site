import React from 'react';
import { Container, Col, OverlayTrigger } from 'react-bootstrap';
import { Button, ToggleButton } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import './Aquarium.css';

export default function Aquarium() {
    return (
      <Container className="App-header flex-fill align-items-center justify-content-center">
        <Col className="col-6 justify-content-center">
          <div className="p-4 rounded" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
            <div className="puzzle">
            <Puzzle 
            containerArray={[1, 1, 1, 2, 3, 3, 4, 1, 5, 2, 2, 6, 4, 5, 5, 7, 2, 6, 5, 5, 7, 7, 8, 8, 7, 7, 7, 8, 8, 8, 9, 9, 7, 7, 7, 7]}
            solutionArray={[1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]}
            size={6}
            />
            </div>
          </div>
        </Col>
      </Container>
    );
  }
  
  class Puzzle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        size: this.props.size,
        containers: this.props.containerArray,
        solution: this.props.solutionArray,
        fullMarks: Array(this.props.solutionArray.length).fill(false),
        emptyMarks: Array(this.props.solutionArray.length).fill(false),
        correct: null,
        fill_mode: false,
        header_hints: false,
      };
    }
    render() {
      const rows = [];
      for (let i = 0; i < this.state.size; i++) {
        rows.push(this.renderRow(i));
      }
      return (
        <div className="puzzle-board">
          {this.renderColHeadings()}
          {rows}
          <div className="puzzle-info w-100 d-flex flex-column align-items-center">
            <div className="w-100">
              {this.renderButtonPanel()}
            </div>
            <div>
              {this.renderCompletionMessage()}
            </div>
          </div>
          <div className="mt-4">
            <h2>How to Play</h2>
            <p>Aquarium puzzles consist of a square grid divided into regions ("tanks").  Click to mark squares as "full" (blue) and right-click to mark them as "empty" (pink).</p>
            <p>To solve the puzzle, fill squares such that:</p>
            <ol>
                <li>Each row and each column has a number of filled squares in it equal to its heading.</li>
                <li>If a square is filled, each other square in the same region that is in the same row or a lower row is also filled.</li>
            </ol>
            <p>While fill mode is on, clicking a square will also automatically change other squares at the same level and above or below within the same tank.</p>
            <p>While header hints are on, row and column headings will be greyed out when the appropriate number of squares in their row or column are filled, and turn red when too many are.</p>
          </div>
        </div>
      )
    }
    renderRow(n) {
      const cells = [];
      for (let i = (this.state.size * n); i < (this.state.size * (n + 1)); i++) {
        cells.push(this.renderCell(i));
      }
      let heading = 0;
      getRow(n, this.state.solution).forEach(cell => {
        heading += cell;
      });
      return (
        <div className="puzzle-row" key={n}>
          {this.renderRowHeading(n)}
          {cells}
        </div>
      );
    }
  
    renderColHeadings(){
      let headings = [];
      for(let i = 0; i < this.state.size; i ++) {
        headings.push(
          this.renderColHeading(i)
        );
      }
      return (
        <div id="col-heading-holder">
          <div id="heading-frame-corner"></div>
          {headings}
        </div>
      )
    }
  
    renderRowHeading(n) {
      let correct_row_value = 0;
      let current_row_value = 0;
      let style = {};
      
      getRow(n, this.state.solution).forEach(cell => {
        correct_row_value += cell;
      });
      getRow(n, this.state.fullMarks).forEach(cell => {
        if (cell) {current_row_value ++;}
      });
      if (this.state.header_hints) {
        if (correct_row_value == current_row_value) {
          style.color = "gray";
        }
        else if (correct_row_value < current_row_value) {
          style.color = "red";
        }
      }
      return (
        <div className="row-heading" key={n} style={style}>
          {correct_row_value}
        </div>
      );
    }
  
    renderColHeading(n) {
      let correct_col_value = 0;
      let current_col_value = 0;
      let style = {};
  
      getColumn(n, this.state.solution).forEach(cell => {
        correct_col_value += cell;
      });
      getColumn(n, this.state.fullMarks).forEach(cell => {
        if(cell) {current_col_value ++;}
      });
      if (this.state.header_hints) {
        if (correct_col_value == current_col_value) {
          style.color = "gray";
        }
        else if (correct_col_value < current_col_value) {
          style.color = "red";
        }
      }
      return (
        <div
        className="col-heading"
        key={n}
        style={style}
        >
          {correct_col_value}
        </div>
      );
    }
  
    renderCell(n) {
      // ideally I'd like to have this border logic elsewhere so it only has to be run once
      // other improvements to make:
      // centered on cell border rather than being all inside one cell (done)
      // fix corners somehow?
      const borderStyleString = "2px solid black";
      const coords = getCoords(n, this.state.containers);
      let borders = {};
      // checks to see if the cell needs horizontal borders (i.e. is it in a different container than the cell immediately to its side)
      const right = this.state.containers[n] != this.state.containers[n + 1] && coords.col != (this.state.size - 1)
      if(right) {
        borders.borderRight = borderStyleString;
      }
      const left = this.state.containers[n] != this.state.containers[n - 1] && coords.col != 0
      if(left) {
        borders.borderLeft = borderStyleString;
      }
      // same deal for columns
      const bottom = getColumn(coords.col, this.state.containers)[coords.row] !=  getColumn(coords.col, this.state.containers)[coords.row + 1] && coords.row != (this.state.size - 1);    
      if(bottom) {
        borders.borderBottom = borderStyleString;
      }
      const top = getColumn(coords.col, this.state.containers)[coords.row] !=  getColumn(coords.col, this.state.containers)[coords.row - 1] && coords.row != 0;
      if(top) {
        borders.borderTop = borderStyleString;
      }
      // assign appropriate styling
      if(this.state.fullMarks[n]) {
        borders.backgroundColor = "lightskyblue"
      }
      if(this.state.emptyMarks[n]){
        borders.backgroundColor = "pink"
      }
  
      return (
        <Cell 
        className="puzzle-square" 
        key={n} 
        style={borders}
        onClick={() => this.handleCellClick(n)}
        onContextMenu={(e) => this.handleCellRightClick(e, n)}
        >
          {}
        </Cell>
      );
    }
  
    renderButtonPanel() {
      return(
        <div className="mt-4 d-flex w-100 justify-content-center">
          <Button className="mx-2" variant="outline-light" size="sm" onClick={() => {this.checkCompletion()}}>
            Check solution
          </Button>
          <Button className="mx-2" variant="outline-light" size="sm" onClick={() => {this.reset()}}>
            Reset
          </Button>
            <ToggleButton 
            type="checkbox" 
            variant="outline-light" 
            size="sm" 
            className="mx-2"
            checked={this.state.fill_mode} 
            onClick={() => {this.toggle_fill_mode()}}
            >
              Fill mode
            </ToggleButton>
            <ToggleButton 
            type="checkbox" 
            variant="outline-light" 
            size="sm" 
            className="mx-2"
            checked={this.state.header_hints} 
            onClick={() => {this.toggle_header_hints()}}
            >
              Header hints
            </ToggleButton>
        </div>
      )
    }
  
    renderCompletionMessage(){
      if(this.state.correct != null) {
        return <div className='mt-4'>{this.state.correct ? "Solution is correct!" : "Errors are present!"}</div>
      }
    }
  
    handleCellRightClick(e, n) {
      e.preventDefault();
      const empties = this.state.emptyMarks.slice();
      if (this.state.fill_mode) {
        if (!this.state.emptyMarks[n]) {
          // right-clicked a white cell in fill mode; fills red down to that level
          var valid_move = true;
          var impacted_cells = [];
          for(var i = 0; i < this.state.fullMarks.length; i ++) {
            if ((this.state.containers[i] == this.state.containers[n]) && (getCoords(i, this.state.containers).row <= getCoords(n, this.state.containers).row)) {
              impacted_cells.push(i);
            }
          }
          //check to see if any of the cells that would be redded by this move are already blue; if they are, ignore it
          impacted_cells.forEach(cell => {
            if (this.state.fullMarks[cell]) {
              valid_move = false;
            }
          });
          if (valid_move) {
            impacted_cells.forEach(cell => {
              empties[cell] = true;
            })
          }
        }
        else {
          // right-clicked a red cell in fill mode; removes red at that level and below
          var fills = [];
          for (var i = 0; i < this.state.containers.length; i++){
            if ((this.state.containers[i] == this.state.containers[n]) && (getCoords(i, this.state.containers).row >= getCoords(n, this.state.containers).row)) {
              fills.push(i);
            }
          }
          fills.forEach(target_cell => {
            empties[target_cell] = false;
          });
        }
      }
      else {
        //clicked a white cell outside of fill mode; turns it red if it isn't blue
        if (!this.state.fullMarks[n]) {
          empties[n] = !empties[n];
        }
      }
      this.setState({emptyMarks: empties});
    }
  
    handleCellClick(n) {
      const cells = this.state.fullMarks.slice();
      if (this.state.fill_mode) {
        if (!this.state.fullMarks[n]) {
          // clicked on an empty cell in fill mode; fills container with blue to that level
          // get a list of all cells that need to be filled
          var fills = [];
          for (var i = 0; i < this.state.containers.length; i++) {
            if ((this.state.containers[i] == this.state.containers[n]) && (getCoords(i, this.state.containers).row >= getCoords(n, this.state.containers).row)){
              fills.push(i);
            }
          }
          fills.forEach(target_cell => {
            cells[target_cell] = true;
          });
        }
        else {
          // clicked a full cell in fill mode; empties blue from container at that level and above
          var empties = [];
          for (var i = 0; i < this.state.containers.length; i++) {
            if ((this.state.containers[i] == this.state.containers[n]) && (getCoords(i, this.state.containers).row <= getCoords(n, this.state.containers).row)){
              empties.push(i);
            }
          }
          empties.forEach(target_cell => {
            cells[target_cell] = false;
          });
        }
      }
      else {
        // clicked a cell in non-fill mode; toggles clicked cell
        cells[n] = !cells[n];
      }
      this.setState({fullMarks: cells});
    }
  
    checkCompletion() {
      let attempt = [];
      let isAttemptCorrect = true;
      this.state.fullMarks.forEach(cell => {
        if(cell) {
          attempt.push(1);
        }
        else {
          attempt.push(0);
        }
      });
      for(let i = 0; i < attempt.length; i++) {
        if(attempt[i] != this.state.solution[i]){
          isAttemptCorrect = false;
        }
      }
      this.setState({correct: isAttemptCorrect});
    }
  
    reset(){
      this.setState({
        fullMarks: Array(this.props.solutionArray.length).fill(false),
        emptyMarks: Array(this.props.solutionArray.length).fill(false),
        correct: null,
      });
    }
  
    toggle_fill_mode() {
      this.setState({
        fill_mode: !this.state.fill_mode,
      })
    }
  
    toggle_header_hints() {
      this.setState({
        header_hints: !this.state.header_hints,
      });
    }
  }
  
  class Cell extends React.Component {
    render(){
      return(
        <div className="puzzle-square" 
        style={this.props.style} 
        onClick={() => this.props.onClick()}
        onContextMenu={(e) => this.props.onContextMenu(e)}>
        </div>
      )
    }
  }
  
  function getRow(n, array) {
    // gets the nth row of a provided (square) array
    const size = Math.sqrt(array.length);
    return array.slice((size * n), (size * (n + 1)));
  }
  
  function getColumn(n, array) {
    // gets the nth column of a provided (square) array
    let size = Math.sqrt(array.length);
    let col = [];
    for (let i = 0; i < array.length; i++){
      if (i % size == n % size) {
        col.push(array[i]);
      }
    }
    return col;
  }
  
  function getCoords(n, array) {
    // gets the coordinates (row, column) of the nth square on a board
    const size = Math.sqrt(array.length);
    return {
      row: Math.floor(n / size),
      col: (n % size)
    }
  }
  