<?php

namespace CleanCodeStudio\SparkVuexPreset;

use File;
use Illuminate\Support\Arr;
use Illuminate\Foundation\Console\Presets\Preset as LaravelPreset;

class SparkVuexPreset extends LaravelPreset
{

		protected static $npm = [
				'add' => [
			        "vue" => "2.*",
        			"vue-on-click-outside" => "^1.0.3",
        			"vuex" => "*",
			        "@babel/cli" => "^7.2.3",
			        "@babel/core" => "^7.2.2",
			        "@babel/preset-env" => "^7.2.3",
			        "axios" => "^0.18",
			        "bootstrap" => "^4.1.1",
			        "browser-sync" => "^2.26.3",
			        "browser-sync-webpack-plugin" => "2.0.1",
			        "cross-env" => "^5.1",
			        "js-array-collections" => "^1.0.9",
			        "jquery" => "^3.2",
			        "laravel-mix" => "^2.0",
			        "lodash" => "^4.17.4",
			        "moment" => "^2.10.6",
			        "popper.js" => "^1.12",
			        "promise" => "^7.1.1",
			        "rtlcss" => "^2.2",
			        "sweetalert" => "^1.1.3",
			        "urijs" => "^1.17.0",
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
