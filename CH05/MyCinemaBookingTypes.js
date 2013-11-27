<script language="JavaScript" type="text/javascript">
function CustomerBooking(bookingId, customerName, film, showDate)
{
	this.customerName = customerName;
	this.bookingId = bookingId;
	this.showDate = showDate;
	this.film = film;
}

CustomerBooking.prototype.getCustomerName = function()
{
	return this.customerName;
}

CustomerBooking.prototype.setCustomerName = function(customerName)
{
	this.customerName = customerName;
}

CustomerBooking.prototype.getShowDate = function()
{
	return this.showDate;
}

CustomerBooking.prototype.setShowDate = function()
{
	this.showDate = showDate;
}

CustomerBooking.prototype.getFilm = function()
{
	return this.film;
}

CustomerBooking.prototype.setFilm = function(film)
{
	this.film = film;
}

CustomerBooking.prototype.getBookingId = function()
{
	return this.bookingId;
}

CustomerBooking.prototype.setBookingId = function(bookingId)
{
	this.bookingId = bookingId;
}
</script>