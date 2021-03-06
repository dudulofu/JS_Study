<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" />
	<xsl:template match="/">
		
		<html>
			<head><title>TV Shows</title></head>
			<body>	
			
				<!-- Cycles through each node in the XML file -->
				
				<xsl:for-each select="tvshow/show">
				
					<xsl:sort select="name" order="ascending" data-type="text" />
					
					<p>The show <xsl:value-of select="name"/> was released in
					<xsl:value-of select="release"/> by 
					<xsl:value-of select="network"/>. <xsl:value-of select="description"/></p>
					
					<p>It had an average 
					viewership of <xsl:value-of select="viewers"/> million people.
					It was cancelled in <xsl:value-of select="end_date"/>
					</p>
					
					<img> 
					
						<!-- Select the attribute to change -->
						
						<xsl:attribute name="src"> 
						
						<!-- Set the value for the attribute -->
						<!-- You grab the attribute of a node with @ -->
						
						<xsl:value-of select="poster/@href" /> 
						</xsl:attribute> 
					</img><br />
				
				</xsl:for-each>
				
			</body>
		</html>

	</xsl:template>
	
</xsl:stylesheet>