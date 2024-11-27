import { Fragment, useId, useState } from "react";

interface Props {
  children: React.ReactNode;
  buttonText: string;
}

const Popover = ({ children, buttonText }: Props) => {
  const id = useId();
  //   const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <button popoverTarget={id}>{buttonText}</button>

      <div popover="auto" id={id} className="popover">
        {children}
      </div>
    </Fragment>
  );
};

export default Popover;
