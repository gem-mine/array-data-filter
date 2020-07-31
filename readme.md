# array-data-filter

Filter by keys in tree structure

```
import arrayDataFilter from 'array-data-filter';
const addressOptions = {
    noChoice: true,
    data: [
        {
            label: '福建',
            value: 'fj',
            children: {
                noChoice: true,
                data: [
                    {
                        label: '福州',
                        value: 'fuzhou',
                        children: {
                            noChoice: true,
                            data: [
                                {
                                    label: '马尾',
                                    value: 'mawei',
                                    children: { data: [{ label: '马尾镇', value: 'maweizhen' }] },
                                }
                            ]
                        }
                    },
                    { label: '泉州', value: 'quanzhou' },
                ]
            }
        },
        {
            label: '北京',
            value: 'bj',
            children: {
                data: [
                    {
                        label: '北京',
                        value: 'beijing',
                        children: {
                            noChoice: true,
                            data: [
                                { label: '朝阳区', value: 'chaoyang' },
                                { label: '海淀区', value: 'haidian' },
                            ],
                        },
                    },
                ],
            },
        }
    ],
}
const values = ['fj', 'fuzhou'];
const result = arrayDataFilter(
    addressOptions.data, (item, level) => item.value === values[level]
);

console.log(result);
//[
//  {label: "福建", value: "fj", children: {…}},
//  {label: "福州", value: "fuzhou", children: {…}}
//]
```
