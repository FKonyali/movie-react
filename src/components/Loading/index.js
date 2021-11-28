import loadingGif from 'assets/lottie/loading.json';
import React, {useEffect} from 'react';
import lottie from 'lottie-web';

const Loading = ({ loading = false, children, style }) => {
  useEffect(() => {
    const loadingDom = document.querySelectorAll(".loading");

    loadingDom.forEach((item) => {
      lottie.loadAnimation({
        container: item,
        animationData: loadingGif
      });
    });
  }, []);

  return (
    <React.Fragment>
      {loading &&
        <div className="loading" style={style} />
      }
      {children}
    </React.Fragment>
  )
};

export default Loading;
