import { useNavigate } from "react-router-dom";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
  additionalClasses?: string;
};

const NavButton = ({ text, additionalClasses, ...rest }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      className={`hover:scale-95 text-white mr-6 ${additionalClasses}`}
      onClick={handleClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default NavButton;

// This is a reusable component that was created to navigate for any further announced
// components in the website
