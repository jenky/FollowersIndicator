/* 
 *
 * Followers Indicator
 * Version: 1.2.1
 * Platform: XenForo
 *
 * Copyright (c) 2012 Milano
 * All rights reserved.
 *
 */
$(document).ready(function(){$(".followersButton").click(function(){var a=$(this).attr("data-follow"),b=$(this).attr("data-member"),c=$(this).text(),d=$(this).next(".followersCount").text(),e=parseInt(d)+1,f=parseInt(d)-1;return XenForo._CsrfRefresh.refresh(),c==XenForo.phrases.follow&&$(".follow-"+a).each(function(){$(this).text(e),$(this).parent().find(".followersButton").attr("href",b+"unfollow?_xfToken="+XenForo._csrfToken).text(XenForo.phrases.unfollow)}),c==XenForo.phrases.unfollow&&$(".follow-"+a).each(function(){$(this).text(f),$(this).parent().find(".followersButton").attr("href",b+"follow?_xfToken="+XenForo._csrfToken).text(XenForo.phrases.follow)}),!1})});