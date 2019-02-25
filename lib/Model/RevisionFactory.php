<?php
/**
 * Created by PhpStorm.
 * User: fregini
 * Date: 25/02/2019
 * Time: 15:55
 */

class RevisionFactory {

    /** @var  \Features\AbstractRevisionFeature */
    protected $revision ;
    protected static $INSTANCE ;

    /**
     * @param \Features\BaseFeature|null $revisionFeature
     *
     * @return \Features\AbstractRevisionFeature
     * @throws Exception
     */
    public static function getInstance( $revisionFeature = null ) {
        if ( static::$INSTANCE == null && $revisionFeature == null ) {
            throw new Exception('Revision not defined');
        } elseif ( static::$INSTANCE == null ) {
            static::$INSTANCE = new self( $revisionFeature );
        }
        return static::$INSTANCE ;
    }

    protected function __construct( \Features\BaseFeature $revisionFeature ) {
        $this->revision = $revisionFeature ;
    }

    public function getChunkReviewModel( \LQA\ChunkReviewStruct $chunkReviewStruct ) {
        return $this->revision->getChunkReviewModel( $chunkReviewStruct );

    }
}