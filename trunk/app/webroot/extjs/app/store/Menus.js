/**
 * 系统菜单栏数据
 */
Ext.define('My.store.Menus', {

    //继承
    extend: 'Ext.data.TreeStore',

    //默认目录
    root: {
        id: 0,
        text: '系统菜单',
        children: [{
            id: 1,
            text: '频道管理',
            children: [{
                id: 11,
                text: '频道列表',
                leaf: 1
            }]
        }, {
            id: 2,
            text: '商品上下架管理',
            children: [{
                id: 21,
                text: '商品列表',
                controller: 'Products',
                url: 'productslist',
                leaf: 1
            }]
        }, {
            id: 3,
            text: '订单管理',
            children: [{
                id: 31,
                text: '订单列表',
                controller: '',
                url: '',
                leaf: 1
            }]
        }, {
            id: 4,
            text: '会员管理',
            children: [{
                id: 41,
                text: '会员列表',
                controller: '',
                url: '',
                leaf: 1
            }]
        }, {
            id: 5,
            text: '角色管理',
            children: [{
                id: 51,
                text: '角色列表',
                controller: '',
                url: '',
                leaf: 1
            }]
        }, {
            id: 6,
            text: '门店管理',
            children: [{
                id: 61,
                text: '门店列表',
                controller: '',
                url: '',
                leaf: 1
            }]
        }, {
            id: 7,
            text: '销售报表统计',
            children: [{
                id: 71,
                text: '统计列表',
                controller: '',
                url: '',
                leaf: 1
            }]
        }, {
            id: 8,
            text: '优惠活动管理',
            children: [{
                id: 81,
                text: '优惠活动列表',
                controller: '',
                url: '',
                leaf: 1
            }]
        }]
    },

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'text',
        type: 'string'
    }, {
        name: 'controller',
        type: 'string'
    }, {
        name: 'url',
        type: 'string'
    }]
});