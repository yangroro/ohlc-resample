"use strict";

const Converter = require("./index");

const btc_usdt_1m = [
  [1563494940000, 10583.89, 10595.93, 10570.82, 10581, 41.40723],
  [1563495000000, 10581.14, 10598.17, 10580.6, 10583.71, 30.145722],
  [1563495060000, 10583.74, 10584.6, 10560, 10578, 31.324269],
  [1563495120000, 10579.73, 10580.77, 10558.57, 10562.48, 41.152152],
  [1563495180000, 10561.56, 10583.74, 10557.69, 10583.26, 47.229129],
  [1563495240000, 10583.74, 10592.81, 10571.89, 10592.7, 20.097719],
  [1563495300000, 10592.7, 10602.41, 10580, 10602.41, 28.69266],
  [1563495360000, 10598.78, 10624.79, 10597.55, 10620.4, 75.75148],
  [1563495420000, 10617.31, 10622.26, 10591.64, 10603.64, 58.335902],
  [1563495480000, 10600.1, 10605.49, 10587.92, 10591.51, 18.005991],
  [1563495540000, 10592.39, 10593.66, 10581.71, 10583.93, 19.334793],
  [1563495600000, 10583.93, 10591.13, 10571.43, 10577.45, 21.472389],
  [1563495660000, 10578.96, 10595.49, 10575.49, 10592.02, 47.554731],
  [1563495720000, 10593.17, 10621.98, 10591.66, 10621.98, 31.215779],
  [1563495780000, 10621.98, 10621.98, 10578.96, 10578.96, 81.066563],
  [1563495840000, 10578.56, 10591.34, 10575, 10586.97, 26.069644],
  [1563495900000, 10587.36, 10595.21, 10580, 10584.99, 14.807155],
  [1563495960000, 10585.8, 10599.99, 10583.93, 10599.88, 27.275499],
  [1563496020000, 10599.88, 10604.08, 10590.81, 10592.72, 18.010144],
  [1563496080000, 10593.29, 10597.88, 10590.81, 10596.17, 10.53644],
  [1563496140000, 10596.15, 10599.55, 10590, 10590.99, 10.67019],
  [1563496200000, 10591, 10611.38, 10590.79, 10605.45, 24.271853],
  [1563496260000, 10611.09, 10629, 10608.99, 10623.17, 38.78208],
  [1563496320000, 10622.07, 10628.61, 10615.06, 10616.14, 14.163161],
  [1563496380000, 10619.08, 10622.94, 10605.45, 10615.25, 23.254442],
  [1563496440000, 10613.74, 10623.01, 10612.38, 10614.31, 7.829884],
  [1563496500000, 10615.65, 10615.79, 10605.48, 10607.77, 18.2575],
  [1563496560000, 10607.98, 10622, 10607.98, 10615, 18.436641],
  [1563496620000, 10614.21, 10655.99, 10612.36, 10636.39, 80.329747],
  [1563496680000, 10643.41, 10652.97, 10639.17, 10650.2, 22.699197],
  [1563496740000, 10650.01, 10651.37, 10643.27, 10646.48, 10.803026],
  [1563496800000, 10642.17, 10644.92, 10628.58, 10639.18, 19.985136],
  [1563496860000, 10640.4, 10644.56, 10630.12, 10633.59, 11.955151],
  [1563496920000, 10637.33, 10644.87, 10634.14, 10643.37, 10.150853],
  [1563496980000, 10644.74, 10649.99, 10641.97, 10648.36, 8.078815],
  [1563497040000, 10648.82, 10649.34, 10630.12, 10640.83, 92.947833],
  [1563497100000, 10643.56, 10650, 10636.69, 10647.12, 22.427207],
  [1563497160000, 10647.12, 10648.14, 10628.57, 10629.97, 32.09648],
  [1563497220000, 10628.57, 10630.36, 10615.02, 10626.51, 24.610219],
  [1563497280000, 10623.76, 10623.76, 10605.77, 10613.18, 21.873919],
  [1563497340000, 10613.3, 10614.79, 10606.8, 10612.02, 10.60778],
  [1563497400000, 10612.15, 10613.58, 10608.09, 10610.18, 7.959267],
  [1563497460000, 10611.96, 10613.2, 10602.25, 10609.38, 26.606076],
  [1563497520000, 10608.17, 10623.7, 10604.09, 10607.73, 8.346768],
  [1563497580000, 10609.79, 10648.15, 10607.09, 10646.2, 55.85128],
  [1563497640000, 10648.14, 10652.5, 10624.19, 10637, 34.198567],
  [1563497700000, 10637.64, 10644, 10636.88, 10643.1, 10.77713],
  [1563497760000, 10644, 10655.17, 10640.21, 10653.45, 16.047156],
  [1563497820000, 10653.44, 10659.98, 10634.78, 10635.99, 30.994251],
  [1563497880000, 10636.45, 10647.91, 10634.78, 10638.94, 10.512605],
  [1563497940000, 10641.42, 10656.92, 10638.94, 10649.49, 14.302747],
  [1563498000000, 10651.06, 10690, 10651.06, 10674.08, 114.740558],
  [1563498060000, 10673.22, 10684.37, 10663.43, 10680.94, 31.143199],
  [1563498120000, 10679.49, 10690, 10677.55, 10683.63, 14.259217],
  [1563498180000, 10685.73, 10706.93, 10682.3, 10703.45, 58.152552],
  [1563498240000, 10703.45, 10705.89, 10687.3, 10698.34, 76.923919],
  [1563498300000, 10700.11, 10705.09, 10674.92, 10680.1, 44.019016],
  [1563498360000, 10680.22, 10688.3, 10679.5, 10682.3, 16.663485],
  [1563498420000, 10682.52, 10691.41, 10680.5, 10688.52, 11.430841],
  [1563498480000, 10688.52, 10693.49, 10671.37, 10672.17, 26.712297],
  [1563498540000, 10671.43, 10679.7, 10666, 10666.99, 37.321145],
  [1563498600000, 10666.36, 10668.89, 10656.35, 10659.47, 22.56754],
  [1563498660000, 10658.42, 10658.42, 10644.34, 10644.35, 28.649698],
  [1563498720000, 10645.36, 10652.24, 10634.78, 10644.71, 51.574449],
  [1563498780000, 10648.16, 10650.95, 10623.7, 10633.38, 22.827023],
  [1563498840000, 10631.57, 10642.07, 10620.96, 10634.32, 21.964913],
  [1563498900000, 10633.51, 10648.27, 10630.22, 10647.1, 17.909232],
  [1563498960000, 10647.16, 10655.11, 10633.26, 10635, 22.77351],
  [1563499020000, 10634.91, 10652.14, 10633.71, 10639.29, 23.592935],
  [1563499080000, 10639.91, 10640, 10634.15, 10638.22, 10.942757],
  [1563499140000, 10638.07, 10648.79, 10634.12, 10645.45, 30.190165],
  [1563499200000, 10645.44, 10645.44, 10638.01, 10642.51, 7.506559],
  [1563499260000, 10642.51, 10660.52, 10638.58, 10660, 21.531658],
  [1563499320000, 10660, 10668.2, 10652.27, 10667.14, 26.647858],
  [1563499380000, 10667.12, 10669.1, 10663.99, 10668.9, 13.808059],
  [1563499440000, 10667.05, 10677, 10664, 10667, 24.816865],
  [1563499500000, 10666.82, 10670, 10644.68, 10650.32, 15.669372],
  [1563499560000, 10652.8, 10653.95, 10642.82, 10645.57, 10.898288],
  [1563499620000, 10642.82, 10644.58, 10620, 10624.43, 36.320178]
];

test("Candle Convert 2 min", () => {
  let result = Converter(btc_usdt_1m, 60, 120);

  expect(result[0]).toEqual([
    1563495000000,
    10583.89,
    10598.17,
    10570.82,
    10583.71,
    71.552952
  ]);

  expect(result[1]).toEqual([
    1563495120000,
    10583.74,
    10584.6,
    10558.57,
    10562.48,
    72.476421
  ]);
});

test("Candle Convert 2 min with missing data", () => {
  let btc_usdt_1m_missing = [
    [1563494940000, 10583.89, 10595.93, 10570.82, 10581, 41.40723],
    //  [1563495000000, 10581.14, 10598.17, 10580.6, 10583.71, 30.145722],
    //[1563495060000, 10583.74, 10584.6, 10560, 10578, 31.324269],
    [1563495120000, 10579.73, 10580.77, 10558.57, 10562.48, 41.152152]
  ];

  let result = Converter(btc_usdt_1m_missing, 60, 120);

  expect(result[0]).toEqual([
    1563495120000,
    10579.73,
    10580.77,
    10558.57,
    10562.48,
    41.152152
  ]);
});

test("Candle Convert 100 min", () => {
  let result = Converter(btc_usdt_1m, 60, 60 * 100);

  expect(result.length).toBe(0);
});

test("Candle Convert is not an array", () => {
  expect(() => {
    Converter(2, 60, 60 * 100);
  }).toThrow();
});
