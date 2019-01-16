<?php

namespace CleanCodeStudio\SparkVuexPreset; 

use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\Console\PresetCommand;

class CleanCodeStudioServiceProvider extends ServiceProvider
{
	 public function boot()
	 {
		 		PresetCommand::macro('spark:vuex', function ($command) {
			
						SparkVuexPreset::install();
	 	
	 		});
	 }
}