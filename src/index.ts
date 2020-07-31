// 获得选中项activeOptions（对象数组）
// activeValue=['fj'] ===》可得到activeOption=[{name:'福建',value:'fj',isLeaf:**,children:**}]
function arrayDataFilter<T>(
  data: T[],
  filterFn: (item: T, level: number) => boolean,
  options?: {
    childrenKeyName?: string;
  },
) {
  const _options = options || {}
  _options.childrenKeyName = _options.childrenKeyName || 'children'
  let children = data || []
  const result: T[] = []
  let level = 0
  // 这里的children就是目前rc-category-cascader数据结构的data
  do {
    const _level = level
    // 获取单个选中项
    // 过滤出item[this.getFieldName('value')] === activeValue[level]
    // 取第一个值（正常不可能有多个，一个activevalue对应一个activeOption对象）
    const foundItem: T = children.filter((item) => filterFn(item, _level))[0]
    if (!foundItem) {
      break
    }
    result.push(foundItem)
    // foundItem的值有children.data，就继续遍历，否则直接返回result
    if ((foundItem as any)[_options.childrenKeyName]?.data) {
      children = (foundItem as any)[_options.childrenKeyName].data
    } else {
      return result
    }
    level += 1
  } while (children.length > 0)
  return result
}

export default arrayDataFilter
