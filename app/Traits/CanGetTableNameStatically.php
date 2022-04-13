<?php

namespace App\Traits;

trait CanGetTableNameStatically
{
	/**
	 * Get the eloquent's table name statically.
	 *
	 * @return 	string 	table name
	 */
	public static function tableName(): string
	{
		return with(new static)->getTable();
	}
}