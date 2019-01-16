<?php

namespace CleanCodeStudio\SparkVuexPreset;

use File;
use Illuminate\Support\Arr;
use Illuminate\Foundation\Console\Presets\Preset as LaravelPreset;

class SparkVuexPreset extends LaravelPreset
{

		protected static $npm = [
				'add' => [
						"vue" => "^2.5.17",
	    			"vue-loader" => "^15.4.2",
			    	"vue-on-click-outside" => "^1.0.3",
	    			"vue-router" => "^3.0.2",
	    			"vue-style-loader" => "^4.1.2",
	    			"vue-template-compiler" => "^2.5.17",
	    			"vuex" => "^3.0.1",
				],
				'remove' => ['jquery', 'popper.js']
		];

		protected static $vendor = [
			'add' => [],
			'remove' => [],
		];
		

		public static function install()
		{

			  self::updatePackages();
			  self::updateWebpack();
			  self::updateJavascript();		
		}

		public static function updatePackageArray($packages)
		{
				$add = self::$npm['add'];
				$remove = self::$npm['remove'];

				return array_merge($add, Arr::except($packages, $remove));
		}

		public static function updateWebpack()
		{
				copy(__DIR__.'/stubs/vuex/webpack.config.js', base_path('webpack.config.js'));
				copy(__DIR__.'/stubs/vuex/webpack.mix.js', base_path('webpack.mix.js'));
		}

		public static function updateJavascript()
		{
			 File::copyDirectory(__DIR__.'/stubs/vuex/js', resource_path('assets/js'));
		}
	
}