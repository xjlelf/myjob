/**
 * 父类控制器
 */
Ext.define('My.controller.Admin', {

    //继承
    extend: 'Ext.app.Controller',

    ////调用视图
    //views: [
    //    'common.Page'
    //],

    //增加tab
    showPanel: function(panel, title, mainpanel, itemId) {
        if (!panel) {
            var tabpanel = Ext.create('Ext.panel.Panel', {
                title: title,
                closable: true,
                html: '功能还在开发中。。。'
            });
            mainpanel.add(tabpanel);
        } else {
            if (Ext.isEmpty(itemId)) {
                itemId = panel;
            }
            if (mainpanel.getComponent(itemId)) {
                var tabpanel = mainpanel.getComponent(itemId);
            } else {
                var tabpanel = Ext.widget(panel, {
                    itemId: panel,
                    title: title,
                    closable: true
                });
                if (tabpanel.store) {
                    tabpanel.getStore().load();
                }
                mainpanel.add(tabpanel);
            }
        }
        mainpanel.setActiveTab(tabpanel);
        return tabpanel;
    },

    //获取panel
    getPanel: function(url) {
        var arr = url.split('/');
        if (arr.length == 3) {
            if (Ext.isEmpty(arr[2])) {
                return arr[1] + 'index';
            }
            return arr[1] + arr[2];
        } else if (arr.length == 4) {
            return arr[1] + arr[2] + arr[3];
        }

    },

    //获取controller
    getExtController: function(url) {
        var arr = url.split('/');
        if (arr.length == 3) {
            return Ext.String.capitalize(arr[1]);
        } else if (arr.length == 4) {
            return arr[1] + '.' + Ext.String.capitalize(arr[2]);
        }
    },

    //显示编辑框
    showEditDialog: function(edit_name, title, record) {
        var me = this;
        if (!me.EditDialog) {
            me.EditDialog = Ext.widget(edit_name);
        }
        if (!Ext.isEmpty(record)) {
            me.loadData(me, record);
            me.EditDialog.setTitle(title);
        } else {
            me.EditDialog.down('form').getForm().reset();
            me.EditDialog.setTitle(title);
        }
        me.EditDialog.show();
    },

    //给表单设定数据
    loadData: function(obj, record) {
        obj.EditDialog.down('form').loadRecord(record);
    },

    //保存数据
    saveData: function(store, url) {
        var	win = this.EditDialog,
            form = win.down('form');
        this.formSubmit(form, url, function() {
            Ext.Msg.show({
                title: '系统提示',
                msg: '保存成功',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.INFO
            });
            store.load();
            win.close();
        });
    },

    //表单提交
    formSubmit: function(form, url, success, params) {
        form.submit({
            url: url,
            waitMsg: '正在保存功能信息...',
            type: 'json',
            params: params,
            success: success,
            failure: function(f, o) {
                Ext.Msg.show({
                    title: '系统提示',
                    msg: '您还未登录，请重新登录',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.WARNING,
                    fn: function() {
                        window.location = '/';
                    }
                });
            }
        });
    },

    //确认删除
    showDeleteDialog: function(url, record, store) {
        var me = this;
        if (!Ext.isEmpty(record)) {
            Ext.Msg.show({
                title: '系统提示',
                msg: '确定要删除选择的项？',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.WARNING,
                fn: function(btnId) {
                    if (btnId == 'yes') {
                        me.deleteData(url + record.data.id, store);
                    }
                }
            });
        } else {
            Ext.Msg.show({
                title: '系统提示',
                msg: '请选择要删除的项',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    //删除数据
    deleteData: function(url, store) {
        Ext.Msg.wait('处理中，请稍后...', '系统提示');
        Ext.Ajax.request({
            url: url,
            waitMsg: '正在处理。。。',
            success: function() {
                Ext.Msg.hide();
                store.load();
                Ext.Msg.show({
                    title: '系统提示',
                    msg: '删除成功',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.INFO
                });
            },
            failure: function() {
                Ext.Msg.hide();
                Ext.Msg.show({
                    title: '系统提示',
                    msg: '删除失败',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }
        });
    }
});