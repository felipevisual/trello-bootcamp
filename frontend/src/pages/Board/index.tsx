import React from 'react';

import { BoardSection, BoardColumn, CardGroup, Card } from './styles';

const Board: React.FC = () => (
  <BoardSection>
    <BoardColumn>
      <h1>Column 1</h1>
      <CardGroup>
        <h2>Card Group 1</h2>
        <Card>
          <h3>Card Title 1</h3>
        </Card>
        <Card>
          <h3>Card Title 2</h3>
        </Card>
      </CardGroup>
    </BoardColumn>

    <BoardColumn>
      <h1>Column 2</h1>
      <CardGroup>
        <h2>Card Group 2</h2>
        <Card>
          <h3>Card Title 3</h3>
        </Card>
      </CardGroup>
    </BoardColumn>
  </BoardSection>
);

export default Board;
