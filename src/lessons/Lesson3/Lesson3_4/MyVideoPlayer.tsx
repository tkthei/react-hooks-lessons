import { forwardRef } from "react";

type MyVideoPlayerProps = {
  width: string;
  type: string;
  src: string;
};

export const MyVideoPlayer = forwardRef<HTMLVideoElement, MyVideoPlayerProps>(
  (props: MyVideoPlayerProps, ref) => {
    return (
      <video width={props.width} ref={ref}>
        <source src={props.src} type={props.type} />
      </video>
    );
  }
);
