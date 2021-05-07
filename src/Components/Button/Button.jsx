import './Button.scss';

const Button = ({ onClick }) => {
  return (
    <div className="Container">
      <button type="button" className="Button" onClick={onClick}>
        LOAD MORE
      </button>
    </div>
  );
};

export default Button;
