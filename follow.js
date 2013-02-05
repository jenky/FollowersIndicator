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

$(document).ready(function() { 
    $('.followersButton').click(function() {
        /* Get all vars */
        var member = $(this).attr('data-follow');
        var memberUrl = $(this).attr('data-member');
        var follow = $(this).text();
        var count = $(this).next('.followersCount').text();
        var plus = parseInt(count)+1;
        var minus = parseInt(count)-1;
        /* Refresh csrf token */
        XenForo._CsrfRefresh.refresh();

        if(follow == XenForo.phrases.follow) {
            /* If this is follow action */
            $('.follow-'+member).each(function() {
                /* Update new count value (+1) */
                $(this).text(plus);
                /* Change the url to unfollow action and the text to unfollow as well */
                $(this).parent().find('.followersButton').attr('href', memberUrl+'unfollow?_xfToken='+XenForo._csrfToken).text(XenForo.phrases.unfollow);
            });
        }
        if(follow == XenForo.phrases.unfollow) {
            /* If this is unfollow action */
            $('.follow-'+member).each(function() {
                /* Update new count value (-1) */
                $(this).text(minus);
                /* Change the url to follow action and the text to follow as well */
                $(this).parent().find('.followersButton').attr('href', memberUrl+'follow?_xfToken='+XenForo._csrfToken).text(XenForo.phrases.follow);
            });
        }

        return false;
    });
});