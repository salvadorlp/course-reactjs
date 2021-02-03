import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
padding-top: 0;
height: 80rem;
background-color: ${ props => `#${props.color}` };
`;

export const Head = styled.header`
display: flex;
padding-top: 0;
width: 100%;
height: 40px;
background-color: #647C64;
`;

export const List = styled.ul`
display: flex;
align-items: center;


li{
    display: inline-block;
    list-style-type: none;
    padding-right: 20px;
}

li a{
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
}
`;

export const ListItem = styled.li`
display: flex;
flex-direction: row;
`;