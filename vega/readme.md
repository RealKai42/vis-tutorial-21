# Vega

```
  "width": 400,
  "height": 200,
  "padding": 5,
```
padding 类似于 css 中的 padding, 是 chart 和 view 之间的内边距 

```
  "scales": [
    {
      "name": "xscale",
      "type": "band",
      "domain": {"data": "table", "field": "category"},
      "range": "width",
      "padding": 0.05,
      "round": true
    },
    {
      "name": "yscale",
      "domain": {"data": "table", "field": "amount"},
      "nice": true,
      "range": "height"
    }
  ]
```
type 为数据类型，默认是 linear, 也就是线性数据. band 为类型数据  
range 为数据的范围, 其中 width 是表的 width  
padding 是 bar chart 中, bar 之间的间距  
round 可以使 bar 对齐到像素  
nice 是优化数据范围, 例如将\[0, 94.355] 优化到 \[0, 100]  

```
  "axes": [
    { "orient": "bottom", "scale": "xscale" },
    { "orient": "left", "scale": "yscale" }
  ],
```
此处定义坐标的位置，也可以进一步使用 tickCount 和 offset 进行定义  

```
  "marks": [
    {
      "type": "rect",
      "from": {"data":"table"},
      "encode": {
        "enter": {
          "x": {"scale": "xscale", "field": "category"},
          "width": {"scale": "xscale", "band": 1},
          "y": {"scale": "yscale", "field": "amount"},
          "y2": {"scale": "yscale", "value": 0}
        },
        "update": {
          "fill": {"value": "steelblue"}
        },
        "hover": {
          "fill": {"value": "red"}
        }
      }
    }
  ]
```
type 为图表类型  
encode 分为几种 enter、exit、hover、update  
enter 为载入时对各个通道定义的数值  



