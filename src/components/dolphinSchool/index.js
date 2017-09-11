import React from 'react';
import style from './index.css'
import Title from '../partnerReg/title'
import ContentList from '../contentList'

class DolphinSchool extends React.Component{
    render(){
        let data= [
            {
                title:'什么是点？',
                content:[
                    <p>外汇基点，通常简称为“点”（英文，pips），汇率变化的最小单位为1个基点，即汇率中最后一个数字的变化，每变化1个单位即称为一个外汇基点的变动。比如说，EUR/USD的汇率从1.2160变为1.2161， 那么EUR/USD汇率上涨了1个基点。除了日元汇率是小数点后面第2位为1个基点外（如：USD/JPY的汇率从116.30变动到116.29，那么USD/JPY汇率下跌了1个基点），其他货币汇率都是以小数点后面第4位来作为1个基点的计算基础。
                        <br/>
                        值得注意的是，按市场惯例，外汇汇率的标价通常由包含小数点后“4”和“2”位的有效数字组成，然而，近年来有很多的外汇交易商引进了包含小数点后第“5”和第“3”位有效数字的外汇汇率的标价表示法。小数点后的第“5”和第“3”位称为分数基点（fractional pips），也就是十分之一个外汇基点。例如：EUR/USD的汇率从1.21600变动到1.21601，那么EUR/USD汇率上涨了1个分数基点。</p>
                ]
            },{
                title:'什么是点差？',
                content:[
                    '买价（Ask）与卖价（Bid）之间差额被称为点差(Spread)。举例而言，银行报出的美元/日元价格为113.20-113.25，意即该银行愿意支付113.20日元来从交易对手那里买入1美元，同时其愿意以113.25日元的价格向交易对手卖出1美元，113.20和113.25之间0.05日元的差距就是点差。点差的大小主要取决于该货币对的流动性大小。'
                ]
            },{
                title:'什么是头寸？',
                content:[
                    '头寸是一种市场约定，承诺买卖合约的最初部位，买进合约者是多头，处于盼涨部位；卖出合约为空头，处于盼跌部位。'
                ]
            },{
                title:'什么是点差？',
                content:[
                    '买价（Ask）与卖价（Bid）之间差额被称为点差(Spread)。举例而言，银行报出的美元/日元价格为113.20-113.25，意即该银行愿意支付113.20日元来从交易对手那里买入1美元，同时其愿意以113.25日元的价格向交易对手卖出1美元，113.20和113.25之间0.05日元的差距就是点差。点差的大小主要取决于该货币对的流动性大小。'
                ]
            },{
                title:'什么是平仓？',
                content:[
                    '买价（Ask）与卖价（Bid）之间差额被称为点差(Spread)。举例而言，银行报出的美元/日元价格为113.20-113.25，意即该银行愿意支付113.20日元来从交易对手那里买入1美元，同时其愿意以113.25日元的价格向交易对手卖出1美元，113.20和113.25之间0.05日元的差距就是点差。点差的大小主要取决于该货币对的流动性大小。'
                ]
            },{
                title:'什么是直盘？',
                content:[
                    '直盘是指在国际外汇市场上，一个交易系统所默认的货币跟其他货币进行兑换的就是直盘，可以简单的这样理解：比如你用的盘面是以美元为基本单位的，那么凡是和美元直接联系的，都是直盘，例如：EUR/USD AUD/USD GBP/USD NZD/USD USD/CHF USD/JPY USD/CAD 这些都有美元出现，这就是直盘。'
                ]
            },{
                title:'什么是交叉盘？',
                content:[
                    '不和美元挂钩的，就是交叉盘。例如：EUR/GBP AUD/JPY AUD/CAD等等，这些里面并没有美元直接参与，这样的就是交叉盘。'
                ]
            },{
                title:'什么是交叉汇率？',
                content:[
                    '在国际市场上，几乎所有的货币兑美元都有一个汇率。一种非美元货币对另外一种非美元货币的汇率，往往就需要通过这两种对美元的汇率进行套算，这种套算出来的汇率就称为交叉汇率。'
                ]
            },{
                title:'什么是保证金？',
                content:[
                    '保证金是一种履约保证，开仓时必须投入一定比例的资金作为定单持有的证明。一般来说，这是交易者存在交易账户里用来支付未来有可能产生亏损的资金。'
                ]
            },{
                title:'什么是交叉盘？',
                content:[
                    '不和美元挂钩的，就是交叉盘。例如：EUR/GBP AUD/JPY AUD/CAD等等，这些里面并没有美元直接参与，这样的就是交叉盘。'
                ]
            },{
                title:'什么是保证金比例？',
                content:[
                    '净值÷已用保证金＝保证金比例。当保证金比例低于100%，系统将会进行强制平仓。'
                ]
            },{
                title:'什么叫杠杆比例？',
                content:[
                    '杠杆比例指在开启仓位时所位时所需要的保证金和该商品合约价值之间的比率。即合约价值÷起始保证金＝该商品杠杆比率。海豚汇为客户提供100至400倍的杠杆；例如，您的账户资金为1,000.00美元，杠杆比例为400，您的最大交易量可达40万美元（1,000.00美元*400倍=400, 000.00美元'
                ]
            },{
                title:'什么叫订单及其类型？',
                content:[
                    '订单是交易商提供执行交易的指令。客户终端包括以下几种类型的订单：市价成交、挂单交易、止损/获利以及追踪止损。'
                ]
            },{
                title:'什么叫隔夜利息？',
                content:[
                    '隔夜利息指持仓隔夜需要支付或者获得的利息。每种货币都有本身的利率，而每项外汇交易涉及两种货币，因此同时涉及两个不同的利率。买入的货币利率高于卖出货币的利率，您就可以赚取隔夜利息。若买入的货币利率低于卖出货币的利率，您就需要支付隔夜利息；比方说，英国的基准利率高于日本，因此如果一个客户买入英镑，他/她将会在GMT时间0点赚取到隔夜利息；相反，如果他/她是卖出英镑，那么他/她将需要在GMT时间0点支付隔夜利息。根据国际银行的规定，玫瑰石于GMT时间0点自动将所有未平掉的开启仓位滚存至下一个结算日。'
                ]
            },{
                title:'“日间交易”与“隔夜交易”的区别？',
                content:[
                    '日间头寸指在 24 小时内建立，并在GMT时间0点交易日收盘之前平仓的头寸 。 隔夜头寸指在正常交易时间 (GMT时间0点) 后未平仓的头寸， 玫瑰石以有竞争力的价格 ( 在货币利息差别的基础上 ) 将隔夜头寸自动将延展至下一个交易日，并计算到交易者的账户余额中去。'
                ]
            },{
                title:'什么叫隔夜利息？',
                content:[
                    '隔夜利息指持仓隔夜需要支付或者获得的利息。每种货币都有本身的利率，而每项外汇交易涉及两种货币，因此同时涉及两个不同的利率。买入的货币利率高于卖出货币的利率，您就可以赚取隔夜利息。若买入的货币利率低于卖出货币的利率，您就需要支付隔夜利息；比方说，英国的基准利率高于日本，因此如果一个客户买入英镑，他/她将会在GMT时间0点赚取到隔夜利息；相反，如果他/她是卖出英镑，那么他/她将需要在GMT时间0点支付隔夜利息。根据国际银行的规定，玫瑰石于GMT时间0点自动将所有未平掉的开启仓位滚存至下一个结算日。'
                ]
            },{
                title:'什么叫净值？',
                content:[
                    '即已将未平仓定单的盈亏列入计算所显示的实际余额，会随仓位的盈亏而变动。'
                ]
            },{
                title:'什么叫可用保证金？',
                content:[
                    '净值－已用保证金＝可用保证金'
                ]
            },{
                title:'什么叫已用保证金？',
                content:[
                    '已用保证金指所有用于建仓而被冻结使用的保证金总和。'
                ]
            },{
                title:'什么叫止损价？',
                content:[
                    '止损价是一种保护机制，指当某一投资出现的亏损到达设定的止损价时，系统自动执行指令及时斩仓出局避免形成更大的亏损。目的在于即使投资失误时该止损点把损失限定在较小的范围内。'
                ]
            },{
                title:'什么叫止盈价？',
                content:[
                    '止盈价又叫止赢价，就是指自己设定的目标价位，当价格达到目标价位系统即会自动成交。止赢的概念在见好就收,不要赢到最高。'
                ]
            },{
                title:'什么叫爆仓？',
                content:[
                    '当我们账户里除了已经使用的保证金外，剩余的钱也就是可用保证金为0的时候。就会爆仓。也就是强行平仓。通常强行平仓都从亏损最大的订单开始，直到保证金比例恢复到平台规定的比例。'
                ]
            }

        ]

        return(
            <div className={style.aboutus}>
                <div className={style.header}>
                    <Title content="/外汇交易术语" color="#5262ff" big={true} bold={true}/>
                </div>
                <div className={style.content}>
                    <ContentList data={data}/>
                </div>
            </div>
        )
    }
}

export default DolphinSchool;