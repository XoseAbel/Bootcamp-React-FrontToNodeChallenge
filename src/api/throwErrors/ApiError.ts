class ApiError {
  code: number;
  constructor(code: number) {
    this.code = code;
  }

  get message() {
    return this.strategicErrors[this.code];
  }

  strategicErrors: { [key: number]: string } = {
    400: 'Bad Request',
    404: 'Not Found',
    500: 'Server Error',
  };
}

export { ApiError };

// class ApiErrorSwitch {
//   code: number;
//   message: string;
//   constructor(code: number) {
//     this.code = code;
//     this.message = ApiErrorSwitch.getMessage(this.code);
//   }

//   static getMessage(code: number) {
//     switch (code) {
//       case 400:
//         return 'Bad Request';
//       case 404:
//         return 'Not Found';
//       case 500:
//         return 'Server Error';
//       default:
//         return 'Error Fatal';
//     }
//   }
// }
