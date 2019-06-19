--DECLARE @Year int = 2019
--DECLARE @TerminalId int = null
--DECLARE @PointOfSaleId int = null

SELECT
	 MIN(o.Created) EarliestOrderCreated
	,l.ProductId
	,p.Name AS ProductName
	,SUM(l.Quantity) ProductQuantity
	,COUNT(o.Id) OrderCount
	,SUM(l.Total) Total
FROM
	Orders o
JOIN
	OrderLines l ON o.Id = l.OrderId
JOIN
	Products p ON l.ProductId = p.Id
WHERE
	o.AmountDue = 0
	AND DATEPART(year, o.Created) = @Year
	AND (@TerminalId IS NULL OR o.TerminalId = @TerminalId)
	AND (@PointOfSaleId IS NULL OR o.PointOfSaleId = @PointOfSaleId)
GROUP BY
	 DATEPART(year, o.Created)
	,DATEPART(month, o.Created)
	,DATEPART(day, o.Created)
	,DATEPART(hour, o.Created)
	,l.ProductId
	,p.Name
ORDER BY
	 EarliestOrderCreated
	,Total DESC