<?php
class Milano_FollowersIndicator_Listener
{
	
	public static function templateCreate($templateName, array &$params, XenForo_Template_Abstract $template) 
	{
		$template->preloadTemplate('followers_indicator_js');
	}
	
    public static function templateHook($hookName, &$contents, array $hookParams, XenForo_Template_Abstract $template) 
    {
		
    	switch ($hookName)
        {
            case 'page_container_js_body':
            	$ourTemplate = $template->create('followers_indicator_js', $template->getParams());
				$contents .= $ourTemplate->render();
				break;
		}
	}
	
	public static function loadClassListener($class, &$extend)
	{
		$classes = array(
			'ControllerPublic_Thread',
		);

		foreach($classes AS $_class)
		{
			if ($class == 'XenForo_' .$_class)
			{
				$extend[] = 'Milano_FollowersIndicator_' .$_class;
			}
		}
	}

}