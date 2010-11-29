<?php

class Main extends Controller {

	function Main()
	{
		parent::Controller();
		$this->load->helper('url');
	}
	
	function index()
	{
		$this->load->view('main_view');
	}

	

}

/* End of file welcome.php */
/* Location: ./system/application/controllers/welcome.php */
