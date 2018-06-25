@component('mail::message')
# Please verify your e-mail address!

Someone (hopefully you) has used this email at {{ config('app.name') }}. Please click the button below to verify your ownership of this account. You will not be able to receive email notifications until you do so.

<br>

@component('mail::button', ['url' => $url_for_verified_email ])
Verify your email
@endcomponent

<br>

If you did not register this account, please contact support here.
@endcomponent
