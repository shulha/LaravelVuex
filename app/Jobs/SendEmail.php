<?php

namespace App\Jobs;

use App\Mail\ConfirmationEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;

class SendEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    protected $api_token;

    /**
     * SendEmail constructor.
     *
     * @param $user
     * @param $api_token
     */
    public function __construct($user, $api_token)
    {
        $this->user = $user;
        $this->api_token = $api_token;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to($this->user)->send(new ConfirmationEmail($this->api_token));
    }
}
