/**
 * 菜单一栏
 */
Ext.define('My.view.welcome.MenusList', {

    //继承
    extend: 'Ext.tree.Panel',

    //名称自定义
    alias: 'widget.menuslist',

    //调用数据
    store: Ext.create('My.store.Menus'),

    //是否显示根目录
    rootVisible: false,

    //显示小箭头
	useArrows: true
});