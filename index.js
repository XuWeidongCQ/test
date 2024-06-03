
const listItem = [
    {
        '工资薪金': '2024-04',
        '所得项目小类': '正常工资薪金',
        '扣缴义务人': '上海随训通电子科技有限公司',
        '收入': '45962.90元',
        '已申报税额': '3278.56元',
    },
    {
        '工资薪金': '2024-03',
        '所得项目小类': '正常工资薪金',
        '扣缴义务人': '上海随训通电子科技有限公司',
        '收入': '36001.44元',
        '已申报税额': '2282.43元',
    },
    {
        '工资薪金': '2024-03',
        '所得项目小类': '全年一次性奖金收入',
        '扣缴义务人': '上海随训通电子科技有限公司',
        '收入': '88095.00元', // 已修改
        '已申报税额': '8599.50元',
    },
    {
        '工资薪金': '2024-02',
        '所得项目小类': '正常工资薪金',
        '扣缴义务人': '上海随训通电子科技有限公司',
        '收入': '37888.00元',
        '已申报税额': '1548.67元',
    },
    {
        '工资薪金': '2024-01',
        '所得项目小类': '正常工资薪金',
        '扣缴义务人': '上海随训通电子科技有限公司',
        '收入': '36000.00元',
        '已申报税额': '684.68元',
    },
]

const textToNumber = (text) => parseFloat(text.slice(0,-1))
const pxToNumber = (text) => parseFloat(text.slice(0,-2))

const render = () => {
    const wrapper = document.getElementById('listWrapper')

    let totalIncomeNumber = 0;
    let totalTaxNumber = 0;

    const renderItem = (item) => {
        const itemContent = document.createElement('div')

        for (const [key, value] of Object.entries(item)) {
            const item = document.createElement('div')
            const keySpan = document.createElement('span')
            const valueSpan = document.createElement('span')

            if (key === '工资薪金') {
                item.style.display = 'flex'
                item.style.justifyContent = 'space-between'
                item.style.color = 'rgb(52, 52, 52)'
            } else {
                item.style.color = 'rgb(157, 157, 157)'
                item.style.fontSize = '15px'
                item.style.width = '90%'
                item.style.cssText += `white-space: nowrap;overflow: hidden;text-overflow: ellipsis;`
            }
            item.style.paddingBottom = '8px'
            keySpan.innerText = `${key}${key === '工资薪金' ? '' : '：'}`
            valueSpan.innerText = value

            item.appendChild(keySpan)
            item.appendChild(valueSpan)
            itemContent.appendChild(item)
        }

        return itemContent
    }

    listItem.forEach(item => {
        const itemWrapper = document.createElement('div')
        const itemContentWrapper = document.createElement('div')
        const itemIconWrapper = document.createElement('div')
        const image = new Image()

        image.src = './rightArrow.png'
        image.style.width = '20px'

        itemWrapper.style.cssText = 'background-color:#fff;margin-top:10px;display:flex'
        itemContentWrapper.style.cssText = 'padding:8px 16px;flex:1'
        itemIconWrapper.style.cssText = 'display:flex;width:32px;justify-content:center;flex-direction:column'

        itemIconWrapper.appendChild(image)

        itemWrapper.appendChild(itemContentWrapper)
        itemWrapper.appendChild(itemIconWrapper)

        const itemContent = renderItem(item)

        itemContentWrapper.appendChild(itemContent)

        wrapper.appendChild(itemWrapper)

        // 计算收入和税
        console.log(textToNumber(item.收入))
        totalIncomeNumber +=  textToNumber(item.收入)
        totalTaxNumber +=  textToNumber(item.已申报税额)

    })

    document.getElementById('totalIncomeNumber').innerText = `${totalIncomeNumber}元`
    document.getElementById('totalTaxNumber').innerText = `${totalTaxNumber}元`


}


render()