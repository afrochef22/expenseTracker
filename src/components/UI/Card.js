import "./Card.css";

const Card = (props) => {
	const classes = "card " + props.className;
	// you must create a variable with props.className if you want
	// to use css in you costume component
	return <div className={classes}>{props.children}</div>;
	// to use a component as a wrapper you must
	// put props.children inbetween the element tags
};

export default Card;
