import PropTypes from 'prop-types';

function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
    let scale = 1
    if (size === "sm") {
        scale = 0.8
    }
    if (size === "lg") {
        scale = 1.2
    }
    const style = {
        backgroundColor,
        padding: '0.5rem',
        border: 'none',
    }
    return (
        <button style={style} onClick={handleClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    handleClick: PropTypes.func,
}

export default Button;