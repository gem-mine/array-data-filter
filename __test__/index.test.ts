import arrayDataFilter from '../src';

const options = {
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
        }
    ],
}
const values = ['fj', 'fuzhou'];

it('basic use',()=>{
    const result = arrayDataFilter(
        options.data, (item, level) => item.value === values[level]
    );
    expect(result.length).toBe(2);
    expect(result[0].value === 'fj');
    expect(result[1].value === 'fuzhou');
})

it('childrenKeyName',()=>{
    const options = {
        data: [
            {
                label: '福建',
                value: 'fj',
                childNodes: {
                    data: [
                        {
                            label: '福州',
                            value: 'fuzhou',
                            childNodes: {
                                data: [
                                    {
                                        label: '马尾',
                                        value: 'mawei',
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
    const result = arrayDataFilter(
        options.data, (item, level) => item.value === values[level],
        {
            childrenKeyName: 'childNodes'
        });
    expect(result.length).toBe(2);
    expect(result[0].value === 'fj');
    expect(result[1].value === 'fuzhou');
})
