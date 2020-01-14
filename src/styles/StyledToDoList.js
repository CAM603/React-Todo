import styled from 'styled-components';

export const StyledToDoList = styled.div`
    width: 50%;
    min-height: 400px;
    border: solid black 1px;
    box-shadow: 10px 10px 5px grey;
    display: flex;
    flex-direction: column;

    div {
        border-bottom: solid black 1px;
        display: flex;
        justify-content: center;
    }
`;