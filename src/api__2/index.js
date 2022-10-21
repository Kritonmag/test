import React from 'react';

const ApiComponentSeccond = (getCoctail) => {
  // const {getCoctail} = this.props
  return (
    <form onSumbit={this.props.getCoctail}>
      <input type='text' placeholder='Коктель'/>
      <button>BUTTON</button>
    </form>
  );
}

export default ApiComponentSeccond

// class ApiComponentSeccond extends React.Comment {
//   render() {
//     return (
//       <form onSumbit={this.props.getCoctail}>
//         <input type='text' placeholder='Коктель'/>
//         <button>BUTTON</button>
//       </form>
//     );
//   }
// }

// export default ApiComponentSeccond