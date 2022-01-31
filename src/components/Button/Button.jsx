import PropTypes from 'prop-types';


const Button = ({buttonTitle, style}) => {
    return (
        <div className="box bg-1">
        <button data-testid="button" className="button planButton button--border-thick button--text-upper button--size-s" style={style}>{buttonTitle}</button>
</div>
    )
}

Button.defaultProps = {
    buttonTitle: "Select this addon",
    style: {
        padding: '0.5em 2em'
    },
}

Button.propTypes = {
    buttonTitle: PropTypes.string
}

export default Button;
