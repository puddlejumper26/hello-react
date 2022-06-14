import PropTypes from 'prop-types';

function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
    let scale = 1
    if (size === "sm") {
        scale = 0.2
    }
    if (size === "md") {
        scale = 1
    }
    if (size === "lg") {
        scale = 5
    }
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}em ${scale * 1.5}em`,
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