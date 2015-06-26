<?php

class WelcomeController extends AppController {

    /* 默认布局 */
    public $layout = 'welcome';

    public function index() {
        $this->render('/welcome');
    }
}
