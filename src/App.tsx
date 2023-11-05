import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function App() {
  const onDragEnd = () => {
    console.log('');
  };
  return (
    // react-beautiful-dnd
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="first" index={0}>
                {() => <li>1</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {() => <li>2</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
