const activeStyle = {
    color: 'black',
}
const deactiveStyle = {
    color: '#898989',
}
const style=({isActive}) => isActive ? activeStyle : deactiveStyle

export default style;