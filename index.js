// import { parse } from '@babel/parser';
// import traverse from '@babel/traverse';
// import generate from '@babel/generator';

// const { parse } = require('@babel/parser');
// const { default: traverse} = require('@babel/traverse');
// const { default: generate } = require('@babel/generator');




// // // парсим код в ast
// // const ast = parse(code);

// // // изменяем ast
// // traverse(ast, {
// //   enter(path) {
// //     // в этом примере мы меняем все переменные `n` на `x`
// //     if (path.isIdentifier({ name: 'n' })) {
// //       path.node.name = 'x';
// //     }
// //   },
// // });

// // генерируем код обратно из ast
// // const output = generate(ast, code);
// // console.log(output.code); // 'const x = 1;'

// async function test() {
//   // const resolve = fetch('https://kodaktor.ru/j/_ast/7f7e0');

//   // let answer = resolve.json();

//   const output = generate({
//   "type": "File",
//   "start": 0,
//   "end": 32,
//   "loc": {
//     "start": {
//       "line": 1,
//       "column": 0
//     },
//     "end": {
//       "line": 1,
//       "column": 32
//     }
//   },
//   "errors": [],
//   "program": {
//     "type": "Program",
//     "start": 0,
//     "end": 32,
//     "loc": {
//       "start": {
//         "line": 1,
//         "column": 0
//       },
//       "end": {
//         "line": 1,
//         "column": 32
//       }
//     },
//     "sourceType": "module",
//     "interpreter": null,
//     "body": [
//       {
//         "type": "VariableDeclaration",
//         "start": 0,
//         "end": 32,
//         "loc": {
//           "start": {
//             "line": 1,
//             "column": 0
//           },
//           "end": {
//             "line": 1,
//             "column": 32
//           }
//         },
//         "declarations": [
//           {
//             "type": "VariableDeclarator",
//             "start": 6,
//             "end": 31,
//             "loc": {
//               "start": {
//                 "line": 1,
//                 "column": 6
//               },
//               "end": {
//                 "line": 1,
//                 "column": 31
//               }
//             },
//             "id": {
//               "type": "Identifier",
//               "start": 6,
//               "end": 7,
//               "loc": {
//                 "start": {
//                   "line": 1,
//                   "column": 6
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 7
//                 },
//                 "identifierName": "x"
//               },
//               "name": "x"
//             },
//             "init": {
//               "type": "CallExpression",
//               "start": 10,
//               "end": 31,
//               "loc": {
//                 "start": {
//                   "line": 1,
//                   "column": 10
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 31
//                 }
//               },
//               "callee": {
//                 "type": "MemberExpression",
//                 "start": 10,
//                 "end": 27,
//                 "loc": {
//                   "start": {
//                     "line": 1,
//                     "column": 10
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 27
//                   }
//                 },
//                 "object": {
//                   "type": "NumericLiteral",
//                   "start": 11,
//                   "end": 17,
//                   "loc": {
//                     "start": {
//                       "line": 1,
//                       "column": 11
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 17
//                     }
//                   },
//                   "extra": {
//                     "rawValue": 764897,
//                     "raw": "764897",
//                     "parenthesized": true,
//                     "parenStart": 10
//                   },
//                   "value": 764897
//                 },
//                 "computed": false,
//                 "property": {
//                   "type": "Identifier",
//                   "start": 19,
//                   "end": 27,
//                   "loc": {
//                     "start": {
//                       "line": 1,
//                       "column": 19
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 27
//                     },
//                     "identifierName": "toString"
//                   },
//                   "name": "toString"
//                 }
//               },
//               "arguments": [
//                 {
//                   "type": "NumericLiteral",
//                   "start": 28,
//                   "end": 30,
//                   "loc": {
//                     "start": {
//                       "line": 1,
//                       "column": 28
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 30
//                     }
//                   },
//                   "extra": {
//                     "rawValue": 16,
//                     "raw": "16"
//                   },
//                   "value": 16
//                 }
//               ]
//             }
//           }
//         ],
//         "kind": "const"
//       }
//     ],
//     "directives": []
//   },
//   "comments": []
// });

//   console.log(output.code);

// }

// test();

const x = 764897 .toString(16);

console.log(x);