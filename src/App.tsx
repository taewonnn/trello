import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function App() {
  const onDragEnd = () => {};
  return (
    // react-beautiful-dnd
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="first" index={0}>
                {() => <li>one</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {() => <li>two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
