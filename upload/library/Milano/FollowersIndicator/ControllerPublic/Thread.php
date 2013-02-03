<?php

class Milano_FollowersIndicator_ControllerPublic_Thread extends XFCP_Milano_FollowersIndicator_ControllerPublic_Thread
{
	public function actionIndex()
	{
		$response = parent::actionIndex();

		$userModel = $this->_getUserModel();
		$options = XenForo_Application::get('options');
		$exclude = $options->XPComment_exclude;
		$latestComment = $options->XPComment_latestComment;

		if(isset($response->params['posts']))
		{
			foreach($response->params['posts'] AS &$post)
			{
				if($post['user_id'])
				{
					$post['followers_count'] = $userModel->countUsersFollowingUserId($post['user_id']);
				}
			}
		}

       	return $response;
	}

	protected function _getUserModel()
	{
		return $this->getModelFromCache('XenForo_Model_User');
	}
}