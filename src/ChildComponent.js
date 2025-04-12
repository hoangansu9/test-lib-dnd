import react from "react";
import { useDrop } from 'react-dnd';
import { Box } from "./Box";

function selectBackgroundColor(isActive, canDrop) {
    if (isActive) {
        return 'green'
    } else if (canDrop) {
        return 'white'
    } else {
        return 'darkkhaki'
    }
} const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

function ChildComponent({ data, setClick, allowedDropEffect = 'any' }) {
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: 'BOX',
            drop: () => ({
                name: `${allowedDropEffect} Dustbin`,
                allowedDropEffect,
            }),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [allowedDropEffect],
    )

    const isActive = canDrop && isOver
    const backgroundColor = selectBackgroundColor(isActive, canDrop)
    return (
        <div className="childComponent" ref={drop} style={{ backgroundColor }}>
            {`Works with ${allowedDropEffect} drop effect`}
            {isActive ? 'Release to drop' : 'Drag a box here'}
            <Box name="Box A" />
        </div>
    );
}

export default ChildComponent;