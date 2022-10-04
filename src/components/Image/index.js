import { useState, forwardRef } from 'react';
import classNames from 'classnames';

import images from '~/assets/image';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noAvatar, ...props }, ref) => {
  const [fallback, setFallBack] = useState();

  const hanldError = () => {
    setFallBack(customFallback);
  };

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      {...props}
      alt={alt}
      onError={hanldError}
    />
  );
});
export default Image;
