import styled from 'styled-components';

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .clear {
        padding: 10px 20px;
        background: red;
        border-radius: 4px;
        margin-top: 15px;
        font-size: 1rem;
        box-shadow: 10px 10px 5px grey;
        color: white;
    }

    .clear:hover {
        background: salmon;
        color: black;
    }
`;