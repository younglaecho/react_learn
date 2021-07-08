import React, {Component} from "react";

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    this.unblock = this.props.history.block('정말 떠나실 건가요?');
  };

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

// function HistorySample({ history }) {
//   const goBack = () => {
//     history.goBack();
//   };

//   const goHome = () => {
//     history.push('/');
//   };

//   useEffect(() => {
//     console.log(history);
//     const unblock = history.block('정말 떠나실건가요?');
//     return () => {
//       unblock();
//     };
//   }, [history]);

//   return (
//     <div>
//       <button onClick={goBack}>뒤로가기</button>
//       <button onClick={goHome}>홈으로</button>
//     </div>
//   );
// }

export default HistorySample;