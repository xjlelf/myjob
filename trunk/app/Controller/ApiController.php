<?php

class ApiController extends AppController {

    /* 默认布局 */
    public $layout = 'ajax';

    /**
     * 控制器结束后执行
     * */
    public function beforeRender() {
        if ($this->layout === 'ajax') {
            $this->view = '/ajax';
        }
    }

    public function index() {
        $data = array('name' => $this->modelClass);
        $this->set('data', $data);
    }
}
