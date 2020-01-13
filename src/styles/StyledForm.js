import styled from 'styled-components';

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 20px;
    border: solid black 1px;
    box-shadow: 10px 10px 5px grey;
    margin-bottom: 20px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        label {
            font-size: 1.5rem;
            text-align: center;
        }
        input {
            padding: 5px;
            margin: 10px;
            border-radius: 4px;
        }
        button {
            padding: 5px 10px;
            background: green;
            border-radius: 4px;
            font-size: 1rem;
        }
    }
`;