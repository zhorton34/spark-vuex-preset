<?php

namespace CleanCodeStudio\SparkVuexPreset\Commands;

use Artisan;
use Illuminate\Console\Command;

class ScaffoldVuexForLaravelSpark extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clean:spark {scaffold}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scaffold Vuex For Laravel Spark';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if($this->argument('scaffold') === 'vuex')
        {
            Artisan::call('preset clean:spark-vuex');

            $this->info('Scaffold is vuex');
        }

        $this->info('Is not scaffoled vuex command');
    }
}
